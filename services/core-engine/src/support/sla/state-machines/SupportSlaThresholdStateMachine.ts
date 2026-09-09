export type SupportSlaThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaThresholdStateMachine {
  private allowedTransitions: Record<SupportSlaThresholdState, SupportSlaThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaThresholdState, to: SupportSlaThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaThresholdState, to: SupportSlaThresholdState): SupportSlaThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
