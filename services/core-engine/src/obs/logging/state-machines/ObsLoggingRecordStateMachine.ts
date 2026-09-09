export type ObsLoggingRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingRecordStateMachine {
  private allowedTransitions: Record<ObsLoggingRecordState, ObsLoggingRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingRecordState, to: ObsLoggingRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingRecordState, to: ObsLoggingRecordState): ObsLoggingRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingRecord: " + from + " -> " + to);
    }
    return to;
  }
}
