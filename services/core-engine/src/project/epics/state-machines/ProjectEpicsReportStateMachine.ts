export type ProjectEpicsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsReportStateMachine {
  private allowedTransitions: Record<ProjectEpicsReportState, ProjectEpicsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsReportState, to: ProjectEpicsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsReportState, to: ProjectEpicsReportState): ProjectEpicsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsReport: " + from + " -> " + to);
    }
    return to;
  }
}
