export type SupportQueuesThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesThresholdStateMachine {
  private allowedTransitions: Record<SupportQueuesThresholdState, SupportQueuesThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesThresholdState, to: SupportQueuesThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesThresholdState, to: SupportQueuesThresholdState): SupportQueuesThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
