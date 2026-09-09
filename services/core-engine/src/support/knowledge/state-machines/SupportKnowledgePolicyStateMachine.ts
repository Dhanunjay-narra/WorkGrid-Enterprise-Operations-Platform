export type SupportKnowledgePolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportKnowledgePolicyStateMachine {
  private allowedTransitions: Record<SupportKnowledgePolicyState, SupportKnowledgePolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportKnowledgePolicyState, to: SupportKnowledgePolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportKnowledgePolicyState, to: SupportKnowledgePolicyState): SupportKnowledgePolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportKnowledgePolicy: " + from + " -> " + to);
    }
    return to;
  }
}
