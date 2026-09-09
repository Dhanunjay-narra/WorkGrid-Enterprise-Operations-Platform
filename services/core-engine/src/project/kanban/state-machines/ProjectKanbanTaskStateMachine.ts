export type ProjectKanbanTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanTaskStateMachine {
  private allowedTransitions: Record<ProjectKanbanTaskState, ProjectKanbanTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanTaskState, to: ProjectKanbanTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanTaskState, to: ProjectKanbanTaskState): ProjectKanbanTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanTask: " + from + " -> " + to);
    }
    return to;
  }
}
