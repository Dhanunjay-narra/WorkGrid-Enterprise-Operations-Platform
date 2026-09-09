export type ProjectSprintsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectSprintsReportStateMachine {
  private allowedTransitions: Record<ProjectSprintsReportState, ProjectSprintsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectSprintsReportState, to: ProjectSprintsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectSprintsReportState, to: ProjectSprintsReportState): ProjectSprintsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectSprintsReport: " + from + " -> " + to);
    }
    return to;
  }
}
