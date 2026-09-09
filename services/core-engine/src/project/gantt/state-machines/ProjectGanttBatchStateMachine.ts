export type ProjectGanttBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttBatchStateMachine {
  private allowedTransitions: Record<ProjectGanttBatchState, ProjectGanttBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttBatchState, to: ProjectGanttBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttBatchState, to: ProjectGanttBatchState): ProjectGanttBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttBatch: " + from + " -> " + to);
    }
    return to;
  }
}
