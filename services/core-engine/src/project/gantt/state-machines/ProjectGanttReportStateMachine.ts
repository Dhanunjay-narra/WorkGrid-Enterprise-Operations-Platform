export type ProjectGanttReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttReportStateMachine {
  private allowedTransitions: Record<ProjectGanttReportState, ProjectGanttReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttReportState, to: ProjectGanttReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttReportState, to: ProjectGanttReportState): ProjectGanttReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttReport: " + from + " -> " + to);
    }
    return to;
  }
}
