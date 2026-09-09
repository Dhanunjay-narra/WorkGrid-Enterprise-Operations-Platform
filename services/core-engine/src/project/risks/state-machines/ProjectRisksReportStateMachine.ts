export type ProjectRisksReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksReportStateMachine {
  private allowedTransitions: Record<ProjectRisksReportState, ProjectRisksReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksReportState, to: ProjectRisksReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksReportState, to: ProjectRisksReportState): ProjectRisksReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksReport: " + from + " -> " + to);
    }
    return to;
  }
}
