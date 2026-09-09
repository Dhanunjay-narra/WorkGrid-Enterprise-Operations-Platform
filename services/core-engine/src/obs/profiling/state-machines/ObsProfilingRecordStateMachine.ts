export type ObsProfilingRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingRecordStateMachine {
  private allowedTransitions: Record<ObsProfilingRecordState, ObsProfilingRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingRecordState, to: ObsProfilingRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingRecordState, to: ObsProfilingRecordState): ObsProfilingRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingRecord: " + from + " -> " + to);
    }
    return to;
  }
}
