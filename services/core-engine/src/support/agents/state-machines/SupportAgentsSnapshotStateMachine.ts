export type SupportAgentsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsSnapshotStateMachine {
  private allowedTransitions: Record<SupportAgentsSnapshotState, SupportAgentsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsSnapshotState, to: SupportAgentsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsSnapshotState, to: SupportAgentsSnapshotState): SupportAgentsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
