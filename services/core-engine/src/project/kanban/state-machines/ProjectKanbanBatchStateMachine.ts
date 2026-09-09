export type ProjectKanbanBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanBatchStateMachine {
  private allowedTransitions: Record<ProjectKanbanBatchState, ProjectKanbanBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanBatchState, to: ProjectKanbanBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanBatchState, to: ProjectKanbanBatchState): ProjectKanbanBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanBatch: " + from + " -> " + to);
    }
    return to;
  }
}
