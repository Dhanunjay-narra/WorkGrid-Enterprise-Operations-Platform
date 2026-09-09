export type ProjectKanbanEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanEventStateMachine {
  private allowedTransitions: Record<ProjectKanbanEventState, ProjectKanbanEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanEventState, to: ProjectKanbanEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanEventState, to: ProjectKanbanEventState): ProjectKanbanEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanEvent: " + from + " -> " + to);
    }
    return to;
  }
}
