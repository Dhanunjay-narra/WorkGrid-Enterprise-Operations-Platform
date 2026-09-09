export interface SupKnowledgeArticleFormData {
  code: string;
  name: string;
  notes?: string;
}

export class SupKnowledgeArticleFormValidator {
  public static validateForm(form: SupKnowledgeArticleFormData): string[] {
    const errors: string[] = [];
    if (!form.code) errors.push("Code is required");
    if (!form.name) errors.push("Name is required");
    return errors;
  }
}
