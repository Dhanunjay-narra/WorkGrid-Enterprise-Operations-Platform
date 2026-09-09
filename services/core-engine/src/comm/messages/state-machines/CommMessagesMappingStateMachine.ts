export type CommMessagesMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesMappingStateMachine {
  private allowedTransitions: Record<CommMessagesMappingState, CommMessagesMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesMappingState, to: CommMessagesMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesMappingState, to: CommMessagesMappingState): CommMessagesMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesMapping: " + from + " -> " + to);
    }
    return to;
  }
}
