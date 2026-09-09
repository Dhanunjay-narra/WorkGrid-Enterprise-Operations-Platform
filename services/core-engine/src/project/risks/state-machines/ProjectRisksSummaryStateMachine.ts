export type ProjectRisksSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksSummaryStateMachine {
  private allowedTransitions: Record<ProjectRisksSummaryState, ProjectRisksSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksSummaryState, to: ProjectRisksSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksSummaryState, to: ProjectRisksSummaryState): ProjectRisksSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksSummary: " + from + " -> " + to);
    }
    return to;
  }
}
