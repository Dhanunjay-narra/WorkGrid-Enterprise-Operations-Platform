export type BiCohortsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsRecordStateMachine {
  private allowedTransitions: Record<BiCohortsRecordState, BiCohortsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsRecordState, to: BiCohortsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsRecordState, to: BiCohortsRecordState): BiCohortsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
