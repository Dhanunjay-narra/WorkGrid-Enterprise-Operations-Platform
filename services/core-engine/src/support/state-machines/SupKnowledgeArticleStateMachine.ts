export type SupKnowledgeArticleState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SupKnowledgeArticleStateMachine {
  private validTransitions: Record<SupKnowledgeArticleState, SupKnowledgeArticleState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SupKnowledgeArticleState, next: SupKnowledgeArticleState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SupKnowledgeArticleState, next: SupKnowledgeArticleState): SupKnowledgeArticleState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SupKnowledgeArticle: from " + current + " to " + next);
    }
    return next;
  }
}
