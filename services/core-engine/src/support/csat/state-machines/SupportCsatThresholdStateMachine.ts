export type SupportCsatThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatThresholdStateMachine {
  private allowedTransitions: Record<SupportCsatThresholdState, SupportCsatThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatThresholdState, to: SupportCsatThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatThresholdState, to: SupportCsatThresholdState): SupportCsatThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
