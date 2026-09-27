import { useForm, UseFormReturn, FieldValues, DefaultValues, Path } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { ZodType } from 'zod';

interface UseFormApiOptions<TSchema extends FieldValues, TResponse = unknown> {
  // Explicitly tell Zod that the schema input/output extends FieldValues
  schema: ZodType<TSchema, any, any>;
  defaultValues?: DefaultValues<TSchema>;
  apiFn: (input: TSchema) => Promise<TResponse>;
  onSuccess?: (data: TResponse) => void;
  onError?: (error: unknown) => void;
}

export function useFormApi<TSchema extends FieldValues, TResponse = unknown>(
  options: UseFormApiOptions<TSchema, TResponse>
) {
  const { schema, defaultValues, apiFn, onSuccess, onError } = options;

  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const form = useForm<TSchema>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = async (data: TSchema) => {
    setIsLoading(true);
    setApiError(null);

    try {
      const response = await apiFn(data);
      if (onSuccess) {
        onSuccess(response);
      }
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'An error occurred');
      if (onError) {
        onError(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    control: form.control,
    errors: form.formState.errors,
    isLoading: isLoading || form.formState.isSubmitting,
    apiError,
    submit: form.handleSubmit(onSubmit),
  };
}