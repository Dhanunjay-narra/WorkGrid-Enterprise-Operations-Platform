export type SupportKnowledgeTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportKnowledgeTransactionStateMachine {
  private allowedTransitions: Record<SupportKnowledgeTransactionState, SupportKnowledgeTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportKnowledgeTransactionState, to: SupportKnowledgeTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportKnowledgeTransactionState, to: SupportKnowledgeTransactionState): SupportKnowledgeTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportKnowledgeTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
