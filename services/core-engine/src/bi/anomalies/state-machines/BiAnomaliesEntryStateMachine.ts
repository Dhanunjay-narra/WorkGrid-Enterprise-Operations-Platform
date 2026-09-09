export type BiAnomaliesEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesEntryStateMachine {
  private allowedTransitions: Record<BiAnomaliesEntryState, BiAnomaliesEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesEntryState, to: BiAnomaliesEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesEntryState, to: BiAnomaliesEntryState): BiAnomaliesEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesEntry: " + from + " -> " + to);
    }
    return to;
  }
}
