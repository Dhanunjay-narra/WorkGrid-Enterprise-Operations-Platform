export type ObsSpansRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansRecordStateMachine {
  private allowedTransitions: Record<ObsSpansRecordState, ObsSpansRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansRecordState, to: ObsSpansRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansRecordState, to: ObsSpansRecordState): ObsSpansRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansRecord: " + from + " -> " + to);
    }
    return to;
  }
}
