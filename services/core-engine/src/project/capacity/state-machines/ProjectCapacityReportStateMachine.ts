export type ProjectCapacityReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacityReportStateMachine {
  private allowedTransitions: Record<ProjectCapacityReportState, ProjectCapacityReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacityReportState, to: ProjectCapacityReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacityReportState, to: ProjectCapacityReportState): ProjectCapacityReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacityReport: " + from + " -> " + to);
    }
    return to;
  }
}
