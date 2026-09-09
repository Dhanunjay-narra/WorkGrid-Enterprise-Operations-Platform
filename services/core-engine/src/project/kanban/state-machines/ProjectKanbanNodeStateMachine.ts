export type ProjectKanbanNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanNodeStateMachine {
  private allowedTransitions: Record<ProjectKanbanNodeState, ProjectKanbanNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanNodeState, to: ProjectKanbanNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanNodeState, to: ProjectKanbanNodeState): ProjectKanbanNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanNode: " + from + " -> " + to);
    }
    return to;
  }
}
