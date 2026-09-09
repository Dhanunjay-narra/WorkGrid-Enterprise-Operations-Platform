export type ProjectGanttSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttSessionStateMachine {
  private allowedTransitions: Record<ProjectGanttSessionState, ProjectGanttSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttSessionState, to: ProjectGanttSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttSessionState, to: ProjectGanttSessionState): ProjectGanttSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttSession: " + from + " -> " + to);
    }
    return to;
  }
}
