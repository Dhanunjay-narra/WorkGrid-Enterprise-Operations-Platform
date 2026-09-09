export type SupportKnowledgeEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportKnowledgeEventStateMachine {
  private allowedTransitions: Record<SupportKnowledgeEventState, SupportKnowledgeEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportKnowledgeEventState, to: SupportKnowledgeEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportKnowledgeEventState, to: SupportKnowledgeEventState): SupportKnowledgeEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportKnowledgeEvent: " + from + " -> " + to);
    }
    return to;
  }
}
