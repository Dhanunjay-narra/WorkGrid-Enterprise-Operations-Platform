export type ProjectTasksSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksSnapshotStateMachine {
  private allowedTransitions: Record<ProjectTasksSnapshotState, ProjectTasksSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksSnapshotState, to: ProjectTasksSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksSnapshotState, to: ProjectTasksSnapshotState): ProjectTasksSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
