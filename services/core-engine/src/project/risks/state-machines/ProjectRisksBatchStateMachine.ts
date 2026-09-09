export type ProjectRisksBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksBatchStateMachine {
  private allowedTransitions: Record<ProjectRisksBatchState, ProjectRisksBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksBatchState, to: ProjectRisksBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksBatchState, to: ProjectRisksBatchState): ProjectRisksBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksBatch: " + from + " -> " + to);
    }
    return to;
  }
}
