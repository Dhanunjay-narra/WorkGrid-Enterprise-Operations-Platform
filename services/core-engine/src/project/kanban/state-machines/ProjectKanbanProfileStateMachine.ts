export type ProjectKanbanProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanProfileStateMachine {
  private allowedTransitions: Record<ProjectKanbanProfileState, ProjectKanbanProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanProfileState, to: ProjectKanbanProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanProfileState, to: ProjectKanbanProfileState): ProjectKanbanProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanProfile: " + from + " -> " + to);
    }
    return to;
  }
}
