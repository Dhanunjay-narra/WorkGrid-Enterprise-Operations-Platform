export type ProjectCapacitySnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacitySnapshotStateMachine {
  private allowedTransitions: Record<ProjectCapacitySnapshotState, ProjectCapacitySnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacitySnapshotState, to: ProjectCapacitySnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacitySnapshotState, to: ProjectCapacitySnapshotState): ProjectCapacitySnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacitySnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
