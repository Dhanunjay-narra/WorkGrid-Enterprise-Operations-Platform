export type SupportQueuesEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesEventStateMachine {
  private allowedTransitions: Record<SupportQueuesEventState, SupportQueuesEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesEventState, to: SupportQueuesEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesEventState, to: SupportQueuesEventState): SupportQueuesEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesEvent: " + from + " -> " + to);
    }
    return to;
  }
}
