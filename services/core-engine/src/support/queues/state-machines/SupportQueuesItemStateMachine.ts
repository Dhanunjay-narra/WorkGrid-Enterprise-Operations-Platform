export type SupportQueuesItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesItemStateMachine {
  private allowedTransitions: Record<SupportQueuesItemState, SupportQueuesItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesItemState, to: SupportQueuesItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesItemState, to: SupportQueuesItemState): SupportQueuesItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesItem: " + from + " -> " + to);
    }
    return to;
  }
}
