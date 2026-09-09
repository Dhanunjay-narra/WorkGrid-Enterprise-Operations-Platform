export type ProjectRisksMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksMappingStateMachine {
  private allowedTransitions: Record<ProjectRisksMappingState, ProjectRisksMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksMappingState, to: ProjectRisksMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksMappingState, to: ProjectRisksMappingState): ProjectRisksMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksMapping: " + from + " -> " + to);
    }
    return to;
  }
}
