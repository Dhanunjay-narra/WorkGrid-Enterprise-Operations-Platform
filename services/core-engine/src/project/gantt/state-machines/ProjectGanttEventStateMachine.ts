export type ProjectGanttEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttEventStateMachine {
  private allowedTransitions: Record<ProjectGanttEventState, ProjectGanttEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttEventState, to: ProjectGanttEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttEventState, to: ProjectGanttEventState): ProjectGanttEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttEvent: " + from + " -> " + to);
    }
    return to;
  }
}
