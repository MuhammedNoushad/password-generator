import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import generatePassword from "@/utils/generatePassword";
import { PasswordDialog } from "./PasswordDialog";

const formSchema = z.object({
  length: z.number().min(8).max(32),
  includeUppercase: z.boolean(),
  includeNumbers: z.boolean(),
  includeSymbols: z.boolean(),
});

export function PasswordGeneratorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      length: 12,
      includeUppercase: true,
      includeNumbers: true,
      includeSymbols: false,
    },
  });

  function onSubmit(values) {
    setIsLoading(true);
    // Simulate API call or password generation
    // Function for generate password using the given values
    const password = generatePassword(values);

    if (password) setGeneratedPassword(password);

    setTimeout(() => {
      setIsDialogOpen(true);
      setIsLoading(false);
    }, 2000);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            className="space-y-1"
            control={form.control}
            name="length"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Password Length: {field.value}</FormLabel>
                <FormControl>
                  <Slider
                    min={8}
                    max={32}
                    step={1}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                  />
                </FormControl>
                <FormDescription className="text-sm">
                  Choose a password length between 8 and 32 characters.
                </FormDescription>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="includeUppercase"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl className="w-4 h-4">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="w-4 h-4">
                    Include Uppercase  (A-Z)
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="includeNumbers"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl className="w-4 h-4">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="w-4 h-4">
                    Include Numbers  (0-9)
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="includeSymbols"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl className="w-4 h-4">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="w-4 h-4">
                    Include Symbols  (!@#$%)
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Generating..." : "Generate Password"}
          </Button>
        </form>
      </Form>
      <PasswordDialog
        password={generatedPassword}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}
