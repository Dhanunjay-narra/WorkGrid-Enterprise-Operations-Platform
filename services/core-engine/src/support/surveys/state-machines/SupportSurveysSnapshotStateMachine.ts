export type SupportSurveysSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysSnapshotStateMachine {
  private allowedTransitions: Record<SupportSurveysSnapshotState, SupportSurveysSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysSnapshotState, to: SupportSurveysSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysSnapshotState, to: SupportSurveysSnapshotState): SupportSurveysSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
