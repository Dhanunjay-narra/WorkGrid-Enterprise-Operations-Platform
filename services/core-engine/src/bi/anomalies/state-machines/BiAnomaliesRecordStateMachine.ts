export type BiAnomaliesRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesRecordStateMachine {
  private allowedTransitions: Record<BiAnomaliesRecordState, BiAnomaliesRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesRecordState, to: BiAnomaliesRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesRecordState, to: BiAnomaliesRecordState): BiAnomaliesRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesRecord: " + from + " -> " + to);
    }
    return to;
  }
}
