export type ProjectKanbanSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanSnapshotStateMachine {
  private allowedTransitions: Record<ProjectKanbanSnapshotState, ProjectKanbanSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanSnapshotState, to: ProjectKanbanSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanSnapshotState, to: ProjectKanbanSnapshotState): ProjectKanbanSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
