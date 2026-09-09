export type ProjectGanttThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttThresholdStateMachine {
  private allowedTransitions: Record<ProjectGanttThresholdState, ProjectGanttThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttThresholdState, to: ProjectGanttThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttThresholdState, to: ProjectGanttThresholdState): ProjectGanttThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
