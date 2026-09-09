export type ProjectKanbanConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanConfigStateMachine {
  private allowedTransitions: Record<ProjectKanbanConfigState, ProjectKanbanConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanConfigState, to: ProjectKanbanConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanConfigState, to: ProjectKanbanConfigState): ProjectKanbanConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanConfig: " + from + " -> " + to);
    }
    return to;
  }
}
