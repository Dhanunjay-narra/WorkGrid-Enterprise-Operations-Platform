export type ProjectRisksPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksPolicyStateMachine {
  private allowedTransitions: Record<ProjectRisksPolicyState, ProjectRisksPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksPolicyState, to: ProjectRisksPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksPolicyState, to: ProjectRisksPolicyState): ProjectRisksPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
