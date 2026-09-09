export type InvItemCategoryState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class InvItemCategoryStateMachine {
  private validTransitions: Record<InvItemCategoryState, InvItemCategoryState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: InvItemCategoryState, next: InvItemCategoryState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: InvItemCategoryState, next: InvItemCategoryState): InvItemCategoryState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for InvItemCategory: from " + current + " to " + next);
    }
    return next;
  }
}
