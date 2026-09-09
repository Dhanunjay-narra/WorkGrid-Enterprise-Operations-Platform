export type SupArticleCategoryState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SupArticleCategoryStateMachine {
  private validTransitions: Record<SupArticleCategoryState, SupArticleCategoryState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SupArticleCategoryState, next: SupArticleCategoryState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SupArticleCategoryState, next: SupArticleCategoryState): SupArticleCategoryState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SupArticleCategory: from " + current + " to " + next);
    }
    return next;
  }
}
