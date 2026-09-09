export type ObsTracingSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingSnapshotStateMachine {
  private allowedTransitions: Record<ObsTracingSnapshotState, ObsTracingSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingSnapshotState, to: ObsTracingSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingSnapshotState, to: ObsTracingSnapshotState): ObsTracingSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
