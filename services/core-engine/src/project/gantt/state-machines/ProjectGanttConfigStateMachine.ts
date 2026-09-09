export type ProjectGanttConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttConfigStateMachine {
  private allowedTransitions: Record<ProjectGanttConfigState, ProjectGanttConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttConfigState, to: ProjectGanttConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttConfigState, to: ProjectGanttConfigState): ProjectGanttConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttConfig: " + from + " -> " + to);
    }
    return to;
  }
}
