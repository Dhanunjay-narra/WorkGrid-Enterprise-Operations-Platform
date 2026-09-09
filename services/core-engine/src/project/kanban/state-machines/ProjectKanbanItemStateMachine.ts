export type ProjectKanbanItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanItemStateMachine {
  private allowedTransitions: Record<ProjectKanbanItemState, ProjectKanbanItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanItemState, to: ProjectKanbanItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanItemState, to: ProjectKanbanItemState): ProjectKanbanItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanItem: " + from + " -> " + to);
    }
    return to;
  }
}
