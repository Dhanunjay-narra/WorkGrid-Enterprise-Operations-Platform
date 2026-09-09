export type ProjectRisksThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksThresholdStateMachine {
  private allowedTransitions: Record<ProjectRisksThresholdState, ProjectRisksThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksThresholdState, to: ProjectRisksThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksThresholdState, to: ProjectRisksThresholdState): ProjectRisksThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
