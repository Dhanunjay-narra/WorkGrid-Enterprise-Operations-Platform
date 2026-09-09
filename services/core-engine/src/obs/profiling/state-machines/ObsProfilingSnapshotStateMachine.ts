export type ObsProfilingSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingSnapshotStateMachine {
  private allowedTransitions: Record<ObsProfilingSnapshotState, ObsProfilingSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingSnapshotState, to: ObsProfilingSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingSnapshotState, to: ObsProfilingSnapshotState): ObsProfilingSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
