export type ProjectKanbanSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectKanbanSessionStateMachine {
  private allowedTransitions: Record<ProjectKanbanSessionState, ProjectKanbanSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectKanbanSessionState, to: ProjectKanbanSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectKanbanSessionState, to: ProjectKanbanSessionState): ProjectKanbanSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectKanbanSession: " + from + " -> " + to);
    }
    return to;
  }
}
