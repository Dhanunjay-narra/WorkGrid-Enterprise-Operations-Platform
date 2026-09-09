export type ObsTracingRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingRecordStateMachine {
  private allowedTransitions: Record<ObsTracingRecordState, ObsTracingRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingRecordState, to: ObsTracingRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingRecordState, to: ObsTracingRecordState): ObsTracingRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingRecord: " + from + " -> " + to);
    }
    return to;
  }
}
