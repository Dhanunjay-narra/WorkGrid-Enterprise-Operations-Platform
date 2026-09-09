export type ObsProbesSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesSnapshotStateMachine {
  private allowedTransitions: Record<ObsProbesSnapshotState, ObsProbesSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesSnapshotState, to: ObsProbesSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesSnapshotState, to: ObsProbesSnapshotState): ObsProbesSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
